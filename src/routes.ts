import {MoviesPage} from "./pages/Movies/MoviesPage"
import {Series} from "./pages/Series/Series"
import {Search} from "./pages/Search/Search"
import {TrendingPage} from "./pages/Trending/TrendingPage"
import {Test} from "./components/Test/Test";

export enum RouterNames {
    TRENDING = '/trending',
    MOVIES = '/movies',
    SERIES = '/series',
    SEARCH = '/search',
    START = '/',
    TEST= '/test'
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
        component:TrendingPage
    },
    {
        path: RouterNames.TRENDING,
        exact: true,
        component:TrendingPage
    },
    {
        path: RouterNames.MOVIES,
        exact: true,
        component:MoviesPage
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
    {
        path: RouterNames.TEST,
        exact: true,
        component:Test
    },
]