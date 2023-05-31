import { Image, Space, Progress, Tag, Button, Input, Checkbox } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';

const makeAssigment = (name) => {
    return (
        <span style={{ fontSize: '25px' }}><EditOutlined/>{ name }</span>
)};

const AssigmentsList = () => {
    const assigments = [];
    for (let i = 0; i < 5; i++) {
        assigments.push(makeAssigment('Assigment ' + i));
    }

    return assigments;
}

const StudentCourseInfo = () => {
    const assigments = AssigmentsList();

    return (
        <Space style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingTop: '50px'
        }}>
            <Space direction='vertical'>
                <Image 
                    width={400}
                    height={400}
                    style={{
                        backgroundColor: 'white',
                        border: '1px solid gray',
                        borderRadius: '10px',
                    }}
                    src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                <Progress percent={30} />
            </Space>

            <Space direction='vertical'>
                <p1 style={{
                    fontSize: '40px',
                    fontWeight: 'bold',
                }}><a href="/course-info-teacher">Course name</a></p1>
                <span style={{ fontSize: '25px' }}>Author</span>
                <span style={{ fontSize: '25px' }}>Description</span>

                <Space>
                    <Tag>Math</Tag>
                    <Tag>CS</Tag>
                    <Tag>Physics</Tag>
                    <Tag>Science</Tag>
                </Space>

                <Space direction='vertical'
                    style={{
                        width: '300px',
                        padding: '10px',
                        border: '1px solid gray',
                        borderRadius: '10px',
                        marginTop: '20px',
                        backgroundColor: 'white',
                    }}>
                        { assigments }
                </Space>
            </Space>
        </Space>
    )
}

const TeacherCourseInfo = () => {
    return (
        <Space style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingTop: '50px'
        }}>
            <Space direction='vertical'>
                <Image 
                    width={400}
                    height={400}
                    style={{
                        backgroundColor: 'white',
                        border: '1px solid gray',
                        borderRadius: '10px',
                    }}
                    src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                <Button style={{width: '400px', height: '50px'}}>Change image</Button>
            </Space>

            <Space direction='vertical'>
                <Input 
                placeholder='Course name'
                style={{
                    fontSize: '40px',
                    fontWeight: 'bold',
                }}/>
                <Input 
                placeholder='Author'
                style={{ fontSize: '25px' }}/>
                <Input 
                placeholder='Description'
                style={{ fontSize: '25px' }}/>

                <Checkbox>Private</Checkbox>

                <Space>
                    <Tag closable={true}>Math</Tag>
                    <Tag closable={true}>CS</Tag>
                    <Tag closable={true}>Physics</Tag>
                    <Tag closable={true}>Science</Tag>
                    <Tag style={{
                        background: "white", borderStyle: "dashed"
                    }}><PlusOutlined/>Add tag</Tag>
                </Space>
            </Space>
            <Space>
                    <Space.Compact direction="vertical">
                        <Button style={{width: '175px', height: '50px'}}><EditOutlined/>Check assigments</Button>
                        <Button style={{width: '175px', height: '50px'}}><PlusOutlined/>Post assigment</Button>
                    </Space.Compact>
            </Space>
        </Space>
)};

export { StudentCourseInfo, TeacherCourseInfo };