import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllCategories} from "../../redux/services/CategoryService.jsx";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {add} from "../../redux/services/ProductService.jsx";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Quiet Store
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();


export default function AddProduct() {
    const onImagePreviewChange = () => {

    };
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const addProduct = (values) => {
        dispatch(add(values)).then(() => {
            navigate('/products/list');
        })
    }

    const categories = useSelector(({categories}) => {
        return categories.listCategories;
    })
    useEffect(() => {
        dispatch(getAllCategories());
    }, [])

    return (
        <>
            <div style={{marginBottom: "20px"}}>
                <Formik initialValues={{
                    name: "",
                    description: "",
                    image: "",
                    price: 0,
                    category: {
                        id: 1
                    }
                }
                } onSubmit={addProduct}>
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
                                                    fullWidth
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
                                                    fullWidth
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
                                                    fullWidth
                                                    autoComplete="email"
                                                    as={TextField}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Field
                                                    required
                                                    name="image"
                                                    label="Image"
                                                    fullWidth
                                                    id="image"
                                                    as={TextField}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Field
                                                    required
                                                    name="imagePreview"
                                                    fullWidth
                                                    id="imagePreview"
                                                    as={TextField}
                                                    onChange={onImagePreviewChange}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <FormControl style={{minWidth: 150}}>
                                                    <InputLabel
                                                        id="demo-simple-select-helper-label">Category</InputLabel>
                                                    <Field
                                                        labelId="demo-simple-select-helper-label"
                                                        id="demo-simple-select-helper"
                                                        name={"category.id"}
                                                        label={"Category"}
                                                        defaultValue={categories[0].id}
                                                        style={{minWidth: 120}}
                                                        as={Select}
                                                    >
                                                        {/*<MenuItem value="0">Type of your request...</MenuItem>*/}
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
                                        {/*<Grid container justifyContent="flex-end">*/}
                                        {/*    <Grid item>*/}
                                        {/*        <Link href="#" variant="body2">*/}
                                        {/*            Already have an account? Sign in*/}
                                        {/*        </Link>*/}
                                        {/*    </Grid>*/}
                                        {/*</Grid>*/}
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