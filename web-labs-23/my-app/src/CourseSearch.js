import { Space, Input, Button, Select, Slider } from 'antd';

const SearchPage = () => {
    return (
        <Space direction='vertical'
        style={{
            display: 'flex',
            alignItems: 'center',
            padding: '20px'
        }}>
            <Input style={{width: 400}}
                placeholder="Course name"
            />
            <Slider step={3} min={3} max={24} style={{width: 400}}
            marks={{
                3: '3',
                12: '12',
                24: '24',
            }}/>
            <span>Duration</span>
            <Space >
                <Select
                    placeholder="Select a teacher"
                    style={{ width: 200 }}
                    options={[
                        { value: 1, label: 'Teacher 1' },
                        { value: 2, label: 'Teacher 2' },
                        { value: 3, label: 'Teacher 3' },
                        { value: 4, label: 'Teacher 4' },
                        { value: 5, label: 'Teacher 5' },
                    ]}
                />
                <Select mode='multiple'
                    placeholder="Select tags"
                    style={{ width: 200 }}
                    options={[
                        { value: 1, label: 'Math' },
                        { value: 2, label: 'Science' },
                        { value: 3, label: 'English' },
                        { value: 4, label: 'History' },
                        { value: 5, label: 'Art' },
                    ]}
                />
            </Space>
        </Space>
)};

export default SearchPage;