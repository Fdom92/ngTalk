

export class UserClass {
    public id: string;
    public username: string;
    public favoriteMovies :Array<any>;
    public favoriteTV :Array<any>;
    public watchListMovies : Array<any>;
    public watchListTV : Array<any>;


    constructor(params: any) {
        this.id = params.id || '';
        this.username = params.username || '';
        this.favoriteMovies = params.favoriteMovies || [];
        this.favoriteTV = params.favoriteTV || [];
        this.watchListMovies = params.watchListMovies || [];
        this.watchListTV = params.watchListTV || [];
    }

}