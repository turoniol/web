import { Button, Menu, Col, Row, Image, Space } from 'antd';
import { EditOutlined, SearchOutlined, PlusOutlined  } from '@ant-design/icons';

const useStudent = true;

const GetAssigments = () => {
    return (
    <Menu selectable={false}>
        <Menu.Item icon={<EditOutlined />}>
            <a href="#">Assignment 1</a>
        </Menu.Item>
        <Menu.Item icon={<EditOutlined />}>
            <a href="#">Assignment 2</a>
        </Menu.Item>
    </Menu>
)};

const CoursesGrid = () => {
    const CoursesColumn = () => {
        const CourseDiv = () => {
            const courseStyle = {
                width: '250px',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'white',
                border: '1px solid gray',
                borderRadius: '5px',
            };

            return (
            <div style={courseStyle}>
                <Space>
                    <Space.Compact direction='vertical'>
                        <Image 
                            width={200}
                            height={200}
                            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                        <a href="/course-info" style={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: 'black',
                            borderBottom: '1px solid gray',
                        }}>Course Name</a>

                        { useStudent ? <GetAssigments /> : <></> }
                    </Space.Compact>
                </Space>
            </div>
            )
        };

        const colstyle = {
            display: 'flex',
            justifyContent: 'center',
        }
        return (
        <Col className="gutter-row" span={6} style={colstyle}>
            <CourseDiv />
        </Col>
        )};

    const CoursesRow = () => {
        const rowStyle = {
            marginTop: '20px',
        }

        return (
        <Row gutter={16} style={rowStyle}>
            <CoursesColumn />
            <CoursesColumn />
            <CoursesColumn />
            <CoursesColumn />
        </Row>
    )};

    return (
    <>
        <CoursesRow />
        <CoursesRow />
    </>
    )
};

const ContentHeader = () => {
    const SearchButton = () => {
        return ( 
            <Button style={{
                height: '50px',
                width: '200px',
                fontSize: '18px',
                backgroundColor: 'orange',
            }}> <a href="/search"><SearchOutlined/> Search for course</a></Button>
    )};
    const AddCourseButton = () => {
        return ( 
            <Button style={{
                height: '50px',
                width: '200px',
                fontSize: '18px',
                backgroundColor: 'orange',
            }}><PlusOutlined/> Add course</Button>
)};

    return (
        <Space style={{
            marginLeft: '120px',
            marginRight: '120px',
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <h1>My Courses</h1>

            { useStudent ? <SearchButton /> : <AddCourseButton />}
        </Space>
    )
}

const HomePage = () => {
    return (
        <>
            <ContentHeader />
            <CoursesGrid />
        </>
    )
};

export default HomePage;