export interface posts {
    title: string;
    description?: string;
    images_src?: string;
    upvotes: number;
    comments: string;
    subreddit: Subreddit;
    username: string;
}
