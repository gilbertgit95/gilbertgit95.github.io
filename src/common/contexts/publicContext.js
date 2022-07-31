import { useState, useEffect, createContext } from 'react'

import googleDrive from '../datasource/external/googleDrive'
import config from '../../config'
import utils from '../utilities'

const PublicContext = createContext({
    publicContext: {
      aboutMe: null,
      isLoading: true
    },
    setPublicContext(data) { return },
})
export default PublicContext

export const usePublicContext = () => {
    const [publicContext, setPublicContext] = useState({
      aboutMe: null,
      isLoading: true
    })

    useEffect(() => {
      let init = async () => {
        let resp = await googleDrive.fetchAboutMe()
        // console.log('public context', resp)

        setPublicContext({...publicContext, ...{ aboutMe: resp, isLoading: false }})
      }

      init()

    }, [])

    return {
      publicContext,
      setPublicContext
    }
}