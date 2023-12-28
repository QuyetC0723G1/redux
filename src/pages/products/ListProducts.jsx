import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAll, removeById, searchProduct} from "../../redux/services/ProductService.jsx";
import {DataGridPro,LicenseInfo} from '@mui/x-data-grid-pro';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
const ListProducts = () => {

    const dispatch = useDispatch();
    const products = useSelector(({products}) => {
        return products.list;
    })
    useEffect(() => {
        dispatch(getAll());
    }, [])
    function handleEdit(row) {
        console.log(1)
    }

    function handleDelete(id) {
        let isConfirmed = confirm("Are you sure you want to delete");
        if (isConfirmed)    {
            dispatch(removeById(id)).then(()=> {
                dispatch(getAll());
            })
        }
        else {
            alert("Oke la")
        }
    }

    function handleChange (event) {
        dispatch(searchProduct(event.target.value))
    }

    const columns= [
        {field: 'id', headerName: 'ID',flex:0.2,resizable:false},
        {field: 'name', headerName: 'Name', flex: 0.5,resizable:false},
        {field: 'image', headerName: 'Image', flex: 1,resizable:false,
            renderCell: (params) => <img src={params.row.image}  alt={""} style={{objectFit:'inherit',height:'300px'}}/>},
        {
            field: 'description', headerName: 'Description', flex: 1,minWidth: 300, maxWidth: 400
        },
        {
            field: 'price',
            headerName: 'Price',
            flex: 0.5,resizable:false
        },
        {
            field: 'category',
            headerName: 'Category',
            flex: 0.6,resizable:false,
            valueGetter: (params) =>
                `${params.row.category.name} `,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,resizable:false,
            renderCell: (params) => (
                <div>
                    <Link to={`/products/edit/${params.row.id}`}>  <Button variant="contained" color="primary">
                        Edit
                    </Button>
                    </Link> &nbsp;&nbsp;&nbsp;
                    <Button variant="contained" color="secondary"
                            onClick={() => handleDelete(params.row.id)}>
                        Delete
                    </Button>
                </div>
            )
        }
    ];



    return (
        <>
        <center>
                <div className={"show-list"} style={{margin:"40px"}}>
                <h2 style={{marginBottom : "10px",color : "Blue"}}>List Product</h2>
                    <input onChange={handleChange} type="text" placeholder={"Search"} style={{margin:"10px"}}/>
                <div style={{ height: 'auto', width: '100%'}}>
                    <DataGridPro
                        rowHeight={350}
                        rows={products}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                </div>
                </div>
            </center>
        </>
    )
}
export default ListProducts;




