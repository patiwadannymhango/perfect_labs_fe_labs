import React, { useEffect } from 'react';
import SliptaLabProfileTable from "../components/SliptaLabProfileTable";
import LayoutQ from "../components/LayoutQ";
import { useDispatch } from 'react-redux';
import { setShowItems } from '../redux/sidebarSlice';
import { setShowItems3 } from '../redux/sadcasASidebarSlice';
import { setShowItems4 } from '../redux/sadcasBSidebarSlice'


function Home(){

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setShowItems(false));
      dispatch(setShowItems3(false));
      dispatch(setShowItems4(false))
    }, [dispatch]);

    return (
        <LayoutQ>
            <SliptaLabProfileTable />
        </LayoutQ>
    );
}

export default Home;