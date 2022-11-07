import { Author } from "./author";
import { AuthorService } from "./author-service";


export default class AsyncInMemoryAuthorService implements AuthorService {
    getAllAuthors(): Promise<Author[]> {
        throw new Error("Method not implemented.");
    }
    getAuthorById(authorId: string): Promise<Author> {
        throw new Error("Method not implemented.");
    }
    addAuthor(author: Author): Promise<Author> {
        throw new Error("Method not implemented.");
    }
    removeAuthor(authorId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updateAuthor(author: Author): Promise<Author> {
        throw new Error("Method not implemented.");
    }

}