import { Space, Row, Col } from 'antd';

const ForumTopic = () => {
    const Answer = () => {
        return (    
            <Row style={{
                fontSize: '20px',
                borderBottom: '1px solid black',
                color: 'gray'
            }}> Answer </Row>
        )
    };

    return (
        <Space direction='vertical' style={{width: '100%', padding: 20}}>
            <Row style={{
                fontWeight: 'bold',
                fontSize: '50px',
            }}>Title</Row>
            <Row style={{
                fontSize: '20px',
                borderBottom: '1px solid black',
            }}>
                Description
            </Row>
            <Answer />
            <Answer />
            <Answer />
            <Answer />
            <Answer />
            <Answer />
            <Answer />
            <Answer />
            <Answer />
            <Answer />
        </Space>
)};

const ForumHome = () => {
    const TopicTitle = () => {
        return (
        <Row
        style={{
            margin: -5,
            border: '1px solid black',
        }}>
            <Col style={{
                padding: '15px',
                fontSize: '30px',
            }}><a href='/forum-topic'>Title</a></Col>
        </Row>
    )};

    return (
    <Space direction='vertical' style={{width: '100%'}}>
        <TopicTitle />
        <TopicTitle />
        <TopicTitle />
        <TopicTitle />
        <TopicTitle />
        <TopicTitle />
        <TopicTitle />
        <TopicTitle />
        <TopicTitle />
    </Space>
)};

export { ForumHome, ForumTopic };