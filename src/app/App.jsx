/* eslint-disable react/react-in-jsx-scope */
import "./styles/global.css";
import Layout from "../layout/Layout";
import Main from "../layout/Main";
import UserPanel from "../component/UserPanel";
import FilterPanel from "../component/FilterPanel";
import CallGrid from "../component/CallGrid";
import CallRow from "../component/CallRow";
import { useDispatch } from "react-redux";
import { fetchMenu } from "../store/menuSlice";

/**
 * Application entrypoint
 * @return {Page} Main page
 */
function App() {
  const dispatch = useDispatch();
  dispatch(fetchMenu());

  return (
    <>
      <Layout>
        <Main>
          <UserPanel />
          <FilterPanel />
          <CallGrid>
            <CallRow />
            <CallRow />
          </CallGrid>
        </Main>
      </Layout>
    </>
  );
}

export default App;
