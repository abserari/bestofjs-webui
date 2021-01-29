import { createContainer } from 'unstated-next'

function useStaticContent() {
  return {
    projectName: 'Best of Go',
    repo: 'https://github.com/abserari/bestofjs-webui',
    version: process.env.REACT_APP_VERSION || '0.0.0'
  }
}

export const StaticContentContainer = createContainer(useStaticContent)
