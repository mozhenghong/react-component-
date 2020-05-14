import React from 'react';
import Layout from './layout';
import Header from './header';
import Footer from './footer';
import Content from './content';
import Aside from './aside';
import './layout.example.scss'

export default function () {
    return (
        <div>
            <div>
                <h3>上下常规布局</h3>
                <Layout className="out" style={{ height: '300px',width: '500px' }}>
                    <Header className="x">header</Header>
                    <Content className="y">content</Content>
                    <Footer className="x">footer</Footer>
                </Layout>
                <h3>左右布局一</h3>
                <Layout className="" style={{ height: '300px', width: '500px'  }}>
                    <Header className="x">header</Header>
                    <Layout>
                        <Aside className="z">aside</Aside>
                        <Content className="y">content</Content>
                    </Layout>
                    <Footer className="x">footer</Footer>
                </Layout>
                <h3>左右布局二</h3>
                <Layout className="" style={{ height: '300px', width: '500px'  }}>
                    <Header className="x">header</Header>
                    <Layout>
                        <Content className="y">content</Content>
                        <Aside className="z">aside</Aside>
                    </Layout>
                    <Footer className="x">footer</Footer>
                </Layout>
                <h3>侧边栏在外</h3>
                <Layout className="" style={{ height: '300px', width: '500px'  }}>
                    <Aside className="z">aside</Aside>
                    <Layout className = "out">
                        <Header className="x">header</Header>
                        <Content className="y">content</Content>
                        <Footer className="x">footer</Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    )
};