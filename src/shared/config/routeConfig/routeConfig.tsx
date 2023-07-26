import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RouterPatch: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPatch.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RouterPatch.about,
        element: <AboutPage/>
    }
}