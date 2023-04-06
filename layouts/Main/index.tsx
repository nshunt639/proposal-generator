import { useLayout } from 'providers/LayoutProvider'
import Footer from './components/Footer'
import Header from './components/Header'

const Main = ({ children }) => {
    const { } = useLayout()

    return (
        <div
            className={`flex min-h-screen flex-col`}
        >
            <Header />
            <main className="flex-1 flex flex-col w-full">{children}</main>
            <Footer />
        </div>
    )
}

export default Main
