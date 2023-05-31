import HomePage from './Home.js';
import Auth from './Auth.js';
import SignUp from './SingUp.js';
import { StudentCourseInfo, TeacherCourseInfo } from './CourseInfo.js'
import SearchPage from './CourseSearch.js';
import { ForumHome, ForumTopic } from './Forum.js'
import { Routes, Route } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import { HomeOutlined, WechatOutlined, UserOutlined  } from '@ant-design/icons';

const { Header, Content } = Layout;

const MainPageContent = () => MainPage(HomePage);
const MainPageStudentCourseInfo = () => MainPage(StudentCourseInfo);
const MainPageTeacherCourseInfo = () => MainPage(TeacherCourseInfo);
const MainPageSearchPage = () => MainPage(SearchPage);
const MainPageForumHome = () => MainPage(ForumHome);
const MainPageForumTopic = () => MainPage(ForumTopic);

const headerStyle = {
    display: 'flex',
    alignItems: 'center',
}

const menuStyle = {
    display: 'flex',
    fontSize: '26px',
}

const MainPage = (ContentBody) => {
    return (
        <Layout>
            <Header style={headerStyle}>
                <Menu style={menuStyle}
                selectable={false}
                theme="dark"
                mode="inline"
                items={[
                    { label: 'Home', icon: <a href='/home'><HomeOutlined style={{fontSize: '125%' }}/></a> },
                    { label: 'Forum', icon: <a href='/forum'><WechatOutlined style={{fontSize: '125%' }}/></a>},
                    { label: 'My account', icon: <a href='/home'><UserOutlined style={{fontSize: '125%' }}/></a> },
                    { label: 'Contact us', path: '/contact'}
                ]}
                />
            </Header>
            <Content>
                <ContentBody />
            </Content>
        </Layout> 
)};

const App = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/home" element={<MainPageContent />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/course-info" element={<MainPageStudentCourseInfo />} />
            <Route path="/course-info-teacher" element={<MainPageTeacherCourseInfo />} />
            <Route path="/search" element={<MainPageSearchPage />} />
            <Route path="/forum" element={<MainPageForumHome />} />
            <Route path="/forum-topic" element={<MainPageForumTopic />} />
        </Routes>
        
    </>
    )
};

export default App;