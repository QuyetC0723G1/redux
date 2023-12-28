import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {add, getById, update} from "../../redux/services/ProductService.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {getAllCategories} from "../../redux/services/CategoryService.jsx";
import {Field, Form, Formik} from "formik";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import {Copyright} from "@mui/icons-material";

export default function UpdateProduct() {
    const navigate = useNavigate();
    const defaultTheme = createTheme();
    const dispatch = useDispatch();

    const product = useSelector(({products}) => {
        return products.newProduct;
    })
    const {id} = useParams();
    useEffect(()=> {
        dispatch(getById(id))
    }, [])

    const categories = useSelector(({categories}) => {
        return categories.listCategories;
    })
    useEffect(() => {
        dispatch(getAllCategories());
    }, [])

    const save = (values) => {
        dispatch(update(values)).then(() => {
            navigate('/products/list');
        })
    }

    return (
        <>
            <div style={{marginBottom: "20px"}}>
                <Formik initialValues={product}
                        onSubmit={save}
                        enableReinitialize={true}>

                    <ThemeProvider theme={defaultTheme}>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline/>
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography component="h1" variant="h5">
                                    ADD PRODUCT
                                </Typography>
                                <Form>
                                    <Box noValidate sx={{mt: 3}}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <Field
                                                    autoComplete="given-name"
                                                    name="name"
                                                    required
                                                    id="name"
                                                    label="Name"
                                                    autoFocus
                                                    as={TextField}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Field
                                                    required
                                                    id="price"
                                                    label="Price"
                                                    name="price"
                                                    autoComplete="family-name"
                                                    as={TextField}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Field
                                                    required
                                                    id="description"
                                                    label="Description"
                                                    name="description"
                                                    autoComplete="email"
                                                    as={TextField}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Field
                                                    required
                                                    name="image"
                                                    label="Image"
                                                    id="image"
                                                    as={TextField}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <FormControl fullwidth={"true"}>
                                                    <InputLabel
                                                        id="demo-simple-select-helper-label">Category</InputLabel>
                                                    <Field
                                                        labelId="demo-simple-select-helper-label"
                                                        id="demo-simple-select-helper"
                                                        value={product.category.id}
                                                        name={"category"}
                                                        label={"Category"}
                                                        defaultValue={categories[0].id}
                                                        style={{minWidth: 120}}
                                                        as={Select}
                                                    >
                                                        {categories && categories.map((item) => (
                                                                <MenuItem key={item.id}
                                                                          value={item.id}>{item.name}</MenuItem>
                                                            )
                                                        )}
                                                    </Field>
                                                </FormControl>
                                            </Grid>


                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                    control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                                    label="Are you sure to add this product ??."
                                                />
                                            </Grid>
                                        </Grid>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{mt: 3, mb: 2}}
                                        >
                                            Save
                                        </Button>
                                    </Box>
                                </Form>
                            </Box>
                            <Copyright sx={{mt: 5}}/>
                        </Container>
                    </ThemeProvider>
                </Formik>
            </div>
        </>
    );


}