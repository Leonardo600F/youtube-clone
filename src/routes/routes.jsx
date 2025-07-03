import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Shorts from "../pages/items/Container/shorts/shorts";
import Subscribes from "../pages/items/Container/subscribes";
import You from "../pages/items/Container2/you";
import YourChannel from "../pages/items/Container2/Channel";
import History from "../pages/items/Container2/history";
import Playlists from "../pages/items/Container2/playlists";
import YourMovies from "../pages/items/Container2/movies";
import WatchLater from "../pages/items/Container2/Later";
import LikedVideos from "../pages/items/Container2/liked";
import Courses from "../pages/items/Container4/explorerCourses";
import Games from "../pages/items/Container4/explorerGames";
import Lives from "../pages/items/Container4/explorerLives";
import ExplorerMovies from "../pages/items/Container4/explorerMovies";
import ExplorerMusic from "../pages/items/Container4/explorerMusic";
import News from "../pages/items/Container4/explorerNews";
import Podcasts from "../pages/items/Container4/explorerPodcasts";
import Shopping from "../pages/items/Container4/explorerShopping";
import Sports from "../pages/items/Container4/explorerSports";
import Trending from "../pages/items/Container4/trending";
import PlusKids from "../pages/items/Container5/plusKids";
import PlusMusic from "../pages/items/Container5/plusMusic";
import Premium from "../pages/items/Container5/plusPremium";
import PlusStudio from "../pages/items/Container5/plusStudio";
import Configs from "../pages/items/Container6/config";
import Feedback from "../pages/items/Container6/feedback";
import Help from "../pages/items/Container6/help";
import ReportHistory from "../pages/items/Container6/reportHistory";
import ChannelOne from "../pages/items/Container3/channelOne";
import ChannelTwo from "../pages/items/Container3/channelTwo";
import ChannelThree from "../pages/items/Container3/channelThree";
import ChannelFour from "../pages/items/Container3/channelFour";
import ChannelFive from "../pages/items/Container3/channelFive";
import ChannelSix from "../pages/items/Container3/channelSix";
import ChannelSeven from "../pages/items/Container3/channelSeven";
import SearchPage from "../pages/search/searchPage";
import SignUp from "../pages/sign-up/sign-up";
import SignIn from "../pages/sign-in/sign-in";
import YourVideos from "../pages/yourVideos/yourVideos";

const AppRoutes = () => {

    return (

        <Routes>

            Container de login
            <Route path='/' element={<Home />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/videos' element={<YourVideos />} />
            <Route path='/yourVideos' element={< YourVideos />} />
            <Route path='/search' element={<SearchPage />} />

        </Routes>

    )
}

export default AppRoutes;

/* <Routes>

            Container de login
            <Route path='/sign-in' element={<SignIn />} />

            Container1
            <Route path='/' element={<Home />} />
            <Route path='/shorts' element={<Shorts />} />
            <Route path='/subscribes' element={<Subscribes />} />

            Container2
            <Route path='/you' element={<You />} />
            <Route path='/channel' element={<YourChannel />} />
            <Route path='/history' element={<History />} />
            <Route path='/playlists' element={<Playlists />} />
            <Route path='/videos' element={<YourVideos />} />
            <Route path='/movies' element={<YourMovies />} />
            <Route path='/later' element={<WatchLater />} />
            <Route path='/liked' element={<LikedVideos />} />

            Container3
            <Route path='/channelOne' element={<ChannelOne />} />
            <Route path='/ChannelTwo' element={<ChannelTwo />} />
            <Route path='/ChannelThree' element={<ChannelThree />} />
            <Route path='/ChannelFour' element={<ChannelFour />} />
            <Route path='/ChannelFive' element={<ChannelFive />} />
            <Route path='/ChannelSix' element={<ChannelSix />} />
            <Route path='/ChannelSeven' element={<ChannelSeven />} />


            Container4
            <Route path='/explorerCourses' element={<Courses />} />
            <Route path='/explorerGames' element={<Games />} />
            <Route path='/explorerLives' element={<Lives />} />
            <Route path='/explorerMovies' element={<ExplorerMovies />} />
            <Route path='/explorerMusic' element={<ExplorerMusic />} />
            <Route path='/explorerNews' element={<News />} />
            <Route path='/explorerPodcasts' element={<Podcasts />} />
            <Route path='/explorerShopping' element={<Shopping />} />
            <Route path='/explorerSports' element={<Sports />} />
            <Route path='/trending' element={<Trending />} />

            Container5
            <Route path='/plusKids' element={<PlusKids />} />
            <Route path='/plusMusic' element={<PlusMusic />} />
            <Route path='/plusPremium' element={<Premium />} />
            <Route path='/plusStudio' element={<PlusStudio />} />

            Container6
            <Route path='/config' element={<Configs />} />
            <Route path='/feedback' element={<Feedback />} />
            <Route path='/help' element={<Help />} />
            <Route path='/reportHistory' element={<ReportHistory />} />

            <Route path='/search' element={<SearchPage />} />

            <Route path='/sign-up' element={<SignUp />} />

            <Route path='/yourVideos' element={< YourVideos />} />

        </Routes> */