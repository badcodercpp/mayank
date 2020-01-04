import HomePage from '../component/codeRoom/home';
import DemoPage from '../component/codeRoom/demo';
import WithHeader from '../hoc/codeSociety/withHeader';

function routeConfig(){
    return [
        {
            path: '/home',
            component: WithHeader(HomePage),
            exact: true
        },
        {
            path: '/demo',
            component: WithHeader(DemoPage),
            exact: false
        }
    ]
}

export default routeConfig;