import React from "react"
import Navbar from "./Navbar"
import { Container, Grid, Stack, Card, CardContent } from '@mui/material';

export default function Dashboard() {
return (
  <>
  <Navbar />
{/* <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container> */}
      <Grid container spacing={1} sx={{ width: '100vw', height: '100vh' }}>
    <Grid container xs={12} sm={7} lg={9}>
        <Stack spacing={1} flex="1 1 0">
            <Card>
                <p> Welcome to your Dashboard </p>
            </Card>

            <Card>
                <CardContent>
                    <p> Users that could be a great fit for your active proposals</p>
                </CardContent>
            </Card>
        </Stack>
    </Grid>

    <Grid container item xs={12} sm={5} lg={3}>
        <Card>
            <CardContent>
                <p> Recent proposals that are seeking your skills as a ... </p>
            </CardContent>
        </Card>
    </Grid>
</Grid>
      </>
)
}