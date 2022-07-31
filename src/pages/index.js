import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

// layouts components
import PersonalPublicLayout from '../common/layouts/personalPublicLayout'

// public pages
import CurriculumVitae from './public/curriculumVitae'

const Pages = (props) => {

    return (
        <BrowserRouter>
            <Routes>

                {/* public page */}
                <Route path={`/`} element={<PersonalPublicLayout />}>
                    <Route path="" element={<CurriculumVitae />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default Pages