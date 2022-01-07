import {Trending} from "./pages/Trending/Trending"
import {Movies} from "./pages/Movies/Movies";
import {Series} from "./pages/Series/Series";
import {Search} from "./pages/Search/Search";

export enum RouterNames {
    TRENDING = '/trending',
    MOVIES = '/movies',
    SERIES = '/series',
    SEARCH = '/search',
    START = '/'
}

interface IRoute {
    path: string
    component: React.ComponentType
    exact: boolean
}

export const routes: IRoute[] = [
    {
        path: RouterNames.START,
        exact: true,
        component:Trending
    },
    {
        path: RouterNames.TRENDING,
        exact: true,
        component:Trending
    },
    {
        path: RouterNames.MOVIES,
        exact: true,
        component:Movies
    },
    {
        path: RouterNames.SERIES,
        exact: true,
        component:Series
    },
    {
        path: RouterNames.SEARCH,
        exact: true,
        component:Search
    },
]