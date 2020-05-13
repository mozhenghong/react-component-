import React from 'react';
import Layout from './layout';
import Header from './header';
import Footer from './footer';
import Content from './content';
import Aside from './aside';

export default function () {
    return (
        <div>
            <div>
                <h2>上下常规布局</h2>
                <Layout className="out" style={{ height: '300px' }}>
                    <Header></Header>
                    <Content></Content>
                    <Footer></Footer>
                </Layout>
                <h2>左右布局一</h2>
                <Layout className="" style={{ height: '300px' }}>
                    <Header></Header>
                    <Layout>
                        <Aside></Aside>
                        <Content></Content>
                    </Layout>
                    <Footer></Footer>
                </Layout>
                <h2>左右布局二</h2>
                <Layout className="" style={{ height: '300px' }}>
                    <Header></Header>
                    <Layout>
                        <Content></Content>
                        <Aside></Aside>
                    </Layout>
                    <Footer></Footer>
                </Layout>
                <h2>侧边栏在外</h2>
                <Layout className="" style={{ height: '300px' }}>
                    <Aside></Aside>
                    <Layout>
                        <Header></Header>
                        <Content></Content>
                        <Footer></Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    )
};