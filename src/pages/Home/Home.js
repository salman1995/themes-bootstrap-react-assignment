// libs
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// src
import { Banner, ThemesList } from '@components'
import { fetchPopularThemeList, fetchLatestThemeList } from '@actions'
import './home.css';
import { Col, Row } from 'react-bootstrap';

function Home({ 
  fetchPopularThemeList,
  fetchLatestThemeList,
  popular,
  latest
}) {
  useEffect(() => {
    fetchPopularThemeList()
  }, [fetchPopularThemeList])

  useEffect(() => {
    fetchLatestThemeList()
  }, [fetchLatestThemeList])

  return (
    <Row>
      <Col lg={12}><Banner /></Col>
      <Col lg={12}><ThemesList themes={popular}/></Col>
      <Col lg={12}><ThemesList  themes={latest}/></Col>
    </Row>
  );
}

export default connect(state => ({
  popular: state.themes.popular,
  latest: state.themes.latest,
}), { 
  fetchPopularThemeList,
  fetchLatestThemeList 
})(Home);
