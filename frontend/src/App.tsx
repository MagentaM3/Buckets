import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import MyBuckets from './pages/MyBuckets'
import '@mantine/carousel/styles.css';
import { createTheme, MantineProvider } from '@mantine/core'
import Groups from './pages/Groups'
import { Notifications } from '@mantine/notifications'
import GroupBuckets from './pages/GroupBuckets'

function App() {
	const theme = createTheme({
		breakpoints: {
			xs: '30em',
			sm: '48em',
			md: '64em',
			lg: '74em',
			xl: '90em',
		}
	});

  return (
    <>
			<MantineProvider theme={theme} >
				<Notifications />
				<BrowserRouter>
					<Routes>
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
						<Route path="my-buckets" element={<MyBuckets />} />
						<Route path="grp-buckets" element={<GroupBuckets />} />
						<Route path="groups" element={<Groups />} />
					</Routes>
				</BrowserRouter>
			</MantineProvider>
    </>
  )
}

export default App
