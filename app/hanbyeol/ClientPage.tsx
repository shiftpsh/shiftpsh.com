"use client";

import {
  EmptyStatePlaceholder,
  Space,
  TextField,
  Typo,
} from "@solved-ac/ui-react";
import { useEffect, useMemo, useState } from "react";
import MainContainer from "../../components/MainContainer";
import Gallery from "../../components/gallery/Gallery";
import ToggleableTag from "../../components/gallery/ToggleableTag";
import { ToggleableTagsRow } from "../../components/gallery/ToggleableTagsRow";
import { getTag } from "../../components/gallery/tags";
import { Frontmatter } from "../../utils/post";
import { normalizeQuery } from "../../utils/search/normalize";
import { useSearchParams } from "next/navigation";

interface Props {
  posts: Frontmatter[];
}

const ClientPage = ({ posts }: Props) => {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [tags, setTags] = useState<string[]>(
    searchParams.get("tags")?.split(",") || []
  );

  const throttledSetQuery = useMemo(() => {
    let timeout: NodeJS.Timeout;
    return (value: string) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setQuery(value), 200);
    };
  }, []);

  const throttledUpdateURL = useMemo(() => {
    let timeout: NodeJS.Timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const url = new URL(window.location.href);
        if (query) {
          url.searchParams.set("query", query);
        } else {
          url.searchParams.delete("query");
        }
        if (tags.length) {
          url.searchParams.set("tags", tags.join(","));
        } else {
          url.searchParams.delete("tags");
        }
        window.history.replaceState({}, "", url.toString());
      }, 200);
    };
  }, [query, tags]);

  useEffect(() => {
    throttledUpdateURL();
  }, [query, tags, throttledUpdateURL]);

  const selectedTagsSet = useMemo(() => new Set(tags), [tags]);

  const allTags = useMemo(() => {
    const tagCounts = new Map<string, number>();
    posts.forEach(({ tags }) => {
      tags.forEach((tag) => {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      });
    });
    return Array.from(tagCounts.entries())
      .map(([tag, count]) => ({
        tag: getTag(tag),
        count,
      }))
      .sort((a, b) => b.count - a.count);
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      if (!query && tags.length === 0) return true;
      const queryIncludes =
        normalizeQuery(post.title).includes(normalizeQuery(query)) ||
        post.tags.some((tag) => {
          if (tag.includes(normalizeQuery(query))) return true;

          const data = getTag(tag);
          if (
            data.aliases?.some((alias) =>
              normalizeQuery(alias).includes(normalizeQuery(query))
            )
          ) {
            return true;
          }

          return false;
        });
      if (tags.length === 0) return queryIncludes;
      const tagIncludes = tags.every((t) => post.tags.some((tag) => t === tag));
      if (!query) return tagIncludes;
      return queryIncludes && tagIncludes;
    });
  }, [posts, tags, query]);

  const tagCountsInFilteredPosts = useMemo(() => {
    const tagCounts = new Map<string, number>();
    filteredPosts.forEach(({ tags }) => {
      tags.forEach((tag) => {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      });
    });
    return tagCounts;
  }, [filteredPosts]);

  const onSelectTag = (tag: string) => {
    setTags((prev) => {
      return [...prev, tag];
    });
  };

  const onDeselectTag = (tag: string) => {
    setTags((prev) => {
      return prev.filter((t) => t !== tag);
    });
  };

  return (
    <>
      <MainContainer>
        <Space h={160} />
        <TextField
          placeholder="검색"
          onChange={(e) => throttledSetQuery(e.target.value)}
          fullWidth
        />
        <Space h={16} />
      </MainContainer>
      <ToggleableTagsRow>
        {allTags
          .filter(({ tag }) => tagCountsInFilteredPosts.get(tag.key))
          .map(({ tag }, i) => (
            <ToggleableTag
              tag={tag}
              key={tag.key}
              value={selectedTagsSet.has(tag.key)}
              reduceOpacity={tags.length > 0 && !selectedTagsSet.has(tag.key)}
              onChange={(value) => {
                if (value) {
                  onSelectTag(tag.key);
                } else {
                  onDeselectTag(tag.key);
                }
              }}
            >
              {tagCountsInFilteredPosts.get(tag.key) || 0}
            </ToggleableTag>
          ))}
      </ToggleableTagsRow>
      <Space h={64} />
      <Gallery prefix="/hanbyeol" items={filteredPosts} />
      {filteredPosts.length === 0 && (
        <>
          <EmptyStatePlaceholder>검색 결과가 없습니다.</EmptyStatePlaceholder>
          <Space h={64} />
        </>
      )}
    </>
  );
};

export default ClientPage;
