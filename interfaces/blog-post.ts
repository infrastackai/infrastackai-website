interface IAuthor {
  name: string;
  picture: string;
}

export default interface IBlogPost {
  title: string;
  coverImage: string;
  date?: string | Date;
  excerpt?: string;
  author?: IAuthor;
}
