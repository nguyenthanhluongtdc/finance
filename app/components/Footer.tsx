import { Box, Container, Grid, Typography } from "@mui/material";

export default function Footer () {
  return (
    <footer>
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "primary.main",
                marginTop: {xs:"20px", md:"30px", sm:"50px"}
            }}
            className="py-5"
            >
            <Container maxWidth="lg" sx={{color:'white'}}>
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12} className="mb-9" >
                        <Typography color="#eceff1" variant="h5" className="text-center">
                            VAYTIEUDUNG247.COM
                        </Typography>
                        <Typography color="#eceff1" variant="h6" className="text-center">
                            GIẢI PHÁP TIÊU DÙNG THÔNG MINH
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="#fff" variant="subtitle1" className="text-center">
                        {`${new Date().getFullYear()} `} <br/>
                        Home-Credit | Tin-Vay | JEFF | Đồng 247 | VayMini | On-Credit
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </footer>
  );
};