import axios from 'axios';
import React,{useState} from 'react'
import {
    Badge,
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Card,
    Label,
    Table

} from 'reactstrap';
import CustomerOrderDetail from './CustomerOrderDetail';

export default function CustomerItem(props) {

    // show new customer
    var today = new Date();
        var date = today.getFullYear() + (today.getMonth() + 1) + today.getDate();
        var cdate = (new Date(props.customer.created_at))
        cdate = cdate.getFullYear() + (cdate.getMonth() + 1) + cdate.getDate();

    // const checkDate=(date)=>{
        
    //     var cdate = (new Date(date));
    //     cdate =  cdate.getDate() +'-'+ (cdate.getMonth() + 1) + '-' + +cdate.getFullYear();
    //     return cdate;
    // }
    
    



    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    // get order 

    const [orderOfCustomer,setOrderOfCustomer]=useState([]);

    const getOrder =async ()=>{
            await axios
            .get(`/api/order/${props.customer.id}`)
            .then(response=>{
                console.log(response.status)
                if(response.status==200)
                {
                 setOrderOfCustomer(response.data);
                }
                
            })
            .catch(function (error) {
                console.log(error);
            });

    }



    return (
        <>
            <tr>
                <td>{props.num + 1}</td>
                <td>{props.customer.id}</td>
                <td>{props.customer.customerName}</td>
                <td>{props.customer.phone}{date - cdate < 3 ? <Badge color="success" style={{ background: 'red' }}>New</Badge> : ""}</td>
                <td>{props.customer.email}</td>
                <td> <Button color="info" onClick={()=>{toggle();getOrder()}}>Xem</Button>{' '}</td>
            </tr>
            <Card>               
                <Modal   isOpen={modal} toggle={toggle} className="order-detail-customer-admin" >
                    <ModalHeader toggle={toggle}>Các Đơn Hàng Của: {props.customer.customerName} </ModalHeader>
                    <ModalBody>
                       <Label>Tổng Đơn Hàng: {orderOfCustomer.length}</Label>
                       <Table>
                           <thead> 
                                <th>STT</th>                             
                                <th>Tên Khách Hàng Nhận</th>
                                <th>Số Điện Thoại</th>
                                <th>Địa Chỉ</th>
                                <th>Thời Gian Đặt Hàng(d/m/y)</th>
                                <th>Chi Tiết Đơn Hàng</th>
                                
                           </thead>
                           <tbody>
                                {   
                                Array.isArray(orderOfCustomer) ?
                                    orderOfCustomer.map((item,index)=>(
                                    <CustomerOrderDetail order={item} key={index} num={index}/>
                                    )): "Data response is error"
                            }
                           </tbody>
                       </Table>
                    </ModalBody>
                    <ModalFooter>
                       
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Card>
        </>
    )
}
