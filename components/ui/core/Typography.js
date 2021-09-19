import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import theme from '../../../util/theme'

const propTypesColor = { color: PropTypes.oneOf(Object.keys(theme.colors)) }

export const H1Styles = css`
  font-family: TWK Everett;
  font-size: 5.625rem;
  line-height: 90%;
  text-transform: uppercase;
  font-feature-settings: 'zero' on, 'ss02' on;
  margin: 0;
  color: ${props => props.theme.colors[props.color]};
`
export const H1 = styled.h1`
  ${H1Styles};
`
H1.propTypes = { ...propTypesColor }
H1.defaultProps = { color: 'neutral900' }

export const H1Alt = styled.h1`
  font-family: 'orpheuspro', serif;
  font-style: italic;
  font-size: 9rem;
  line-height: 8rem;
  text-transform: initial;
  margin: 0;
  color: ${props => props.theme.colors[props.color]};
  font-feature-settings: 'zero' on;
`

H1Alt.propTypes = { ...propTypesColor }
H1Alt.defaultProps = { color: 'neutral900' }

export const H2Styles = css`
  font-family: TWK Everett;
  font-size: 4rem;
  line-height: 95%;
  text-transform: uppercase;
  font-feature-settings: 'zero' on, 'ss02' on;
  margin: 0;
  color: ${props => props.theme.colors[props.color || 'neutral900']};
`
export const H2 = styled.h2`
  ${H2Styles}
`

export const H2Alt = styled.h2`
  font-family: 'orpheuspro', serif;
  font-style: italic;
  font-size: 5rem;
  line-height: 5rem;
  text-transform: initial;
  margin: 0;
  color: ${props => props.theme.colors[props.color]};
  font-feature-settings: 'zero' on;
`

H2Alt.propTypes = { ...propTypesColor }
H2Alt.defaultProps = { color: 'neutral900' }

export const H3Styles = css`
  font-family: TWK Everett;
  font-size: 3rem;
  line-height: 95%;
  text-transform: uppercase;
  font-feature-settings: 'zero' on, 'ss02' on;
  margin: 0;
  color: ${props => props.theme.colors[props.color || 'neutral900']};
`
export const H3 = styled.h3`
  ${H3Styles}
`

export const H3Alt = styled.h3`
  font-family: 'orpheuspro', serif;
  font-style: italic;
  font-size: 3.2rem;
  line-height: 4rem;
  text-transform: initial;
  margin: 0;
  color: ${props => props.theme.colors[props.color]};
  font-feature-settings: 'zero' on;
`

H3Alt.propTypes = { ...propTypesColor }
H3Alt.defaultProps = { color: 'neutral900' }

export const H4Styles = css`
  font-family: TWK Everett;
  font-size: 1.5rem;
  line-height: 120%;
  text-transform: uppercase;
  font-feature-settings: 'zero' on, 'ss02' on;
  margin: 0;
  color: ${props => props.theme.colors[props.color || 'neutral900']};
`
export const H4 = styled.h4`
  ${H4Styles}
`

export const H4Alt = styled.h4`
  font-family: 'orpheuspro', serif;
  font-style: italic;
  font-size: 2.4rem;
  line-height: 2.8rem;
  text-transform: initial;
  margin: 0;
  color: ${props => props.theme.colors[props.color]};
  font-feature-settings: 'zero' on;
`

H4Alt.propTypes = { ...propTypesColor }
H4Alt.defaultProps = { color: 'neutral900' }

export const H5Styles = css`
  font-family: TWK Everett;
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-transform: uppercase;
  font-feature-settings: 'zero' on, 'ss02' on;
  margin: 0;
  color: ${props => props.theme.colors[props.color || 'neutral900']};
`
export const H5 = styled.h5`
  ${H5Styles}
`

export const H6Styles = css`
  font-family: TWK Everett;
  font-size: 1.125rem;
  line-height: 1.625rem;
  text-transform: uppercase;
  font-feature-settings: 'zero' on, 'ss02' on;
  margin: 0;
  color: ${props => props.theme.colors[props.color || 'neutral900']};
`
export const H6 = styled.h6`
  ${H6Styles}
`

export const PStyles = css`
  font-family: TWK Everett;
  font-size: 1.6rem;
  line-height: 2rem;
  font-feature-settings: 'zero' on, 'ss02' on;
  color: ${props => props.theme.colors[props.color || 'neutral900']};
`

export const Subtitle1 = styled.p`
  ${PStyles}
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: ${props => props.theme.colors[props.color || 'neutral900']};
`

export const Body1 = styled.p`
  ${PStyles}
  font-size: 1rem;
  line-heigth: 1.5rem;
  color: ${props => props.theme.colors[props.color || 'neutral900']};
`

export const Body2 = styled.p`
  ${PStyles}
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${props => props.theme.colors[props.color || 'neutral900']};
`

export const Caption = styled.p`
  ${PStyles}
  font-size: 1.1rem;
  line-height: 1.4rem;
`

export const Overline1 = styled.p`
  font-family: TWK Everett;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 120%;
  text-transform: uppercase;
  font-feature-settings: 'zero' on, 'ss02' on;
  color: ${props => props.theme.colors[props.color || 'neutral900']};
`

export const Overline2 = styled.p`
  font-family: TWK Everett;
  font-size: 0.625rem;
  line-height: 120%;
  text-transform: uppercase;
  line-height: 120%;
  font-feature-settings: 'zero' on, 'ss02' on;
  color: ${props => props.theme.colors[props.color || 'neutral900']};
`

export const AStyles = css`
  font-family: TWK Everett;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  text-decoration-line: underline;
  margin: 0;
  padding: 0 5px;
  text-transform: uppercase;
  font-feature-settings: 'zero' on, 'ss02' on;

  /* Truncate long links inside of overflow hidden parents: */
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  color: ${props => props.theme.colors[props.color || 'neutral900']};
`
export const Hyperlink = styled.a`
  ${AStyles}
`

export const PCodeStyles = css`
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;
  margin: 0;
  padding: 2px 5px;
  border-radius: 4px;
  color: ${props => props.theme.colors[props.color || 'primary600']};
  background-color: ${props => props.theme.colors.neutral050};
  border: 1px solid ${props => props.theme.colors.primary050};
`
export const InlineCode = styled.p`
  ${PCodeStyles}
`

export const PreCodeStyles = css`
  display: block;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;
  margin: 0;
  padding: 10px;
  border-radius: 8px;
  color: ${props => props.theme.colors[props.color || 'neutral900']};
  background-color: ${props => props.theme.colors.neutral050};
  border: 1px solid ${props => props.theme.colors.neutral200};
`
export const Code = styled.p`
  ${PreCodeStyles}
`

export default {}
