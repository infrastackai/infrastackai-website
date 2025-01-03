interface IAuthor {
  name: string;
  picture: string;
  title: string;
}

export default interface IBlogPost {
  title: string;
  coverImage: string;
  date?: string | Date;
  excerpt?: string;
  author?: IAuthor;
}
