import styled from "styled-components";

const HeaderStyle = styled.header`
  .Header-Nav {
    padding: 0;
    background-color: #fff !important;
    position: fixed ;
    z-index: 3;
    width: 100%;
    box-shadow: 0 3px 8px #eee;
  }

  .Header-Nav .Nav-Container {
    flex-direction: row-reverse;
  }

  .Header-Nav .Nav-Brand {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 0;
    text-decoration: none;
    color: #71787E;
  }

  .Header-Nav .Nav-Links .Link {
    text-decoration: none;
    color: #71787E;
  }

  .Header-Nav .Nav-Links .Link.active {
    color: #1d75be;
    font-weight: 500;
    font-size: 17px;
  }

  .Header-Nav .Nav-Links .Link:hover {
    color: #1d75be;
  }

  .Header-Nav .Nav-Brand h1 {
    font-size: 26px;
    color: #71787E;
  }

  @media (max-width: 767px) {
    .Header-Nav .Nav-Brand h1 {
      font-size: 22px;
    }
  }

  .Header-Nav .Nav-Brand h1 span {
    color: #1d75be;
    padding: 0 7px;
  }

  .Header-Nav .Nav-Brand img {
    width: 80px;
  }

  @media (max-width: 767px) {
    .Header-Nav .Nav-Brand img {
      width: 60px;
    }
  }
`
export default HeaderStyle;