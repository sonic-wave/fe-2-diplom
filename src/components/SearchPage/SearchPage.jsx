import { SearchHeader } from '../SearchHeader/SearchHeader';
import { Footer } from '../Footer/Footer';
import './SearchPage.css';
import { SearchProgress } from '../SearchProgress/SearchProgress';
import { FilterWidget } from '../FilterWidget/FilterWidget';

export const SearchPage = () => {
    return (
        <>
            <SearchHeader />
            <SearchProgress />
            <div className="searchPage-container">
                <FilterWidget />
            </div>
            <Footer />
        </>
    )
}