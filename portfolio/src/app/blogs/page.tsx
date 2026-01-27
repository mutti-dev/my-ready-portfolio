"use client";

import { useState, useMemo } from "react";
import { blogs } from "@/src/data/blogs";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./blogs.module.css";

interface FilterState {
    searchQuery: string;
    selectedTag: string | null;
}

export default function BlogsPage() {
    const [filters, setFilters] = useState<FilterState>({
        searchQuery: "",
        selectedTag: null,
    });


    const allTags = useMemo(() => {
        const tags = new Set<string>();
        blogs.forEach((blog) => {
            blog.tags.forEach((tag) => tags.add(tag));
        });
        return Array.from(tags).sort();
    }, []);


    const filteredBlogs = useMemo(() => {
        return blogs.filter((blog) => {
            const matchesSearch =
                blog.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
                blog.description
                    .toLowerCase()
                    .includes(filters.searchQuery.toLowerCase()) ||
                blog.tags.some((tag) =>
                    tag.toLowerCase().includes(filters.searchQuery.toLowerCase())
                );

            const matchesTag =
                !filters.selectedTag || blog.tags.includes(filters.selectedTag);

            return matchesSearch && matchesTag;
        });
    }, [filters]);


    const featuredBlogs = filteredBlogs.filter((blog) => blog.featured);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <div className={styles.blogsContainer}>

            <motion.section
                className={styles.filterSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="container">
                    <div className={styles.searchBox}>
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={filters.searchQuery}
                            onChange={(e) =>
                                setFilters((prev) => ({
                                    ...prev,
                                    searchQuery: e.target.value,
                                }))
                            }
                            className={styles.searchInput}
                        />
                    </div>
                </div>
            </motion.section>
            <motion.section
                className={styles.heroSection}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <h1 className={styles.title}>My Blogs</h1>
                    <p className={styles.subtitle}>
                        Insights, tutorials, and thoughts on web development and software engineering
                    </p>
                </div>
            </motion.section>



            {/* Featured Section */}
            {filteredBlogs.length > 0 && !filters.searchQuery && !filters.selectedTag && (
                <motion.section
                    className={styles.featuredSection}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="container">
                        <h2 className={styles.sectionTitle}>Featured Articles</h2>
                        <motion.div className={styles.featuredGrid} variants={containerVariants}>
                            {featuredBlogs.map((blog) => (
                                <motion.div
                                    key={blog.id}
                                    className={styles.featuredCard}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link href={`/blogs/${blog.slug}`} className={styles.cardLink}>
                                        <div className={styles.featuredContent}>
                                            <div className={styles.featuredMeta}>
                                                <span className={styles.date}>
                                                    {new Date(blog.date).toLocaleDateString("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric",
                                                    })}
                                                </span>
                                                <span className={styles.readTime}>{blog.readTime} min read</span>
                                            </div>
                                            <h3 className={styles.featuredTitle}>{blog.title}</h3>
                                            <p className={styles.featuredDescription}>
                                                {blog.description}
                                            </p>
                                            <div className={styles.tagsList}>
                                                {blog.tags.map((tag) => (
                                                    <span key={tag} className={styles.tag}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>
            )}

            {/* All Blogs Section */}
            <motion.section
                className={styles.allBlogsSection}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="container">
                    <h2 className={styles.sectionTitle}>
                        {filters.searchQuery || filters.selectedTag ? "Search Results" : "All Articles"}
                    </h2>

                    {filteredBlogs.length > 0 ? (
                        <motion.div className={styles.blogsList} variants={containerVariants}>
                            {filteredBlogs.map((blog) => (
                                <motion.article
                                    key={blog.id}
                                    className={styles.blogCard}
                                    variants={itemVariants}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link href={`/blogs/${blog.slug}`} className={styles.blogCardLink}>
                                        <div className={styles.blogMeta}>
                                            <span className={styles.date}>
                                                {new Date(blog.date).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                })}
                                            </span>
                                            <span className={styles.readTime}>
                                                {blog.readTime} min read
                                            </span>
                                        </div>
                                        <h3 className={styles.blogTitle}>{blog.title}</h3>
                                        <p className={styles.blogDescription}>{blog.description}</p>
                                        <div className={styles.blogTags}>
                                            {blog.tags.map((tag) => (
                                                <span key={tag} className={styles.tagBadge}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            className={styles.noResults}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <p>No articles found matching your search.</p>
                            <button
                                onClick={() =>
                                    setFilters({
                                        searchQuery: "",
                                        selectedTag: null,
                                    })
                                }
                                className={styles.resetButton}
                            >
                                Clear Filters
                            </button>
                        </motion.div>
                    )}
                </div>
            </motion.section>
        </div>
    );
}
