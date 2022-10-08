export default interface PostInterface {
  content: string;
  data: {
    title: string;
    abstract: string;
    postedDate: string;
    note?: string;
  };
  filePath: string;
}
