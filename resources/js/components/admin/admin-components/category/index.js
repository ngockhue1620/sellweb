import React, {useState,useEffect} from 'react'
import {
    Table

} from 'reactstrap';

import CategoryItem from './CategoryItem';

import axiosAdmin from '../../axiosAdmin';

export default function Index() {

    const [listCategory, setListCategory] = useState([]);


    

    useEffect(() => {
        async function fetchData() {
            
        await axiosAdmin
            .get("api/category")
            .then((data) => {
                setListCategory(data)

            }).catch(function (error) {
                console.log(error);
            });
            
        }
        fetchData();
    }, []);

    return (
        <div className="conten-component-admin">
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã Danh Mục</th>
                        <th>Tên Danh Mục</th>
                        <th>Chi Tiết</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {
                        listCategory.map((item,index)=>(
                            <CategoryItem category={item} num={index} key={index}/>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
