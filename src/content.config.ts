import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		// Load Markdown files in the src/content/work directory.
		loader: glob({ base: './src/content/work', pattern: '**/*.md', }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
	experience: defineCollection({
		// Load Markdown files in the src/content/experience directory.
		loader: glob({ base: './src/content/experience', pattern: '**/*.md', }),
		schema: z.object({
			yearRange: z.string(),
			role: z.string(),
			publishDate: z.coerce.date(),
			skills: z.array(z.string()),
			company: z.string(),
		}),
	}),
};
