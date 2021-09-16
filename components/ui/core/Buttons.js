import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const BaseTextStyles = css`
  font-family: TWK Everett;
  font-size: 1rem;
  line-height: 1.25rem;
  text-transform: uppercase;
  font-feature-settings: 'zero' on, 'ss02' on;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    height: 1.6rem;
    width: 1.6rem;
  }
`

const BaseDisabledStyles = css`
  &,
  &:hover,
  &:focus,
  &:active {
    background-color: ${props => props.theme.colors.neutral700};
    box-shadow: none;
  }
  color: ${props => props.theme.colors.neutral500};
  box-shadow: none;
  --icon-stroke: ${props => props.theme.colors.neutral500};
  --icon-fill: ${props => props.theme.colors.neutral500};
`;



export const Button = styled.div`
  ${BaseTextStyles}
  background-color: ${props => props.theme.colors.primary500};
  padding: 0.75rem 2rem;
  color: ${props => props.theme.colors.neutral000};
  border-radius: 40px;
  box-shadow: 0px 2px 20px rgba(231, 34, 128, 0.75);
  transition: background-color 300ms;
  --icon-stroke: ${props => props.theme.colors.neutral000};
  --icon-fill: ${props => props.theme.colors.neutral000};

  &:hover {
    background-color: ${props => props.theme.colors.primary400};
  }

  &:focus {
    background-color: ${props => props.theme.colors.primary500};
    border: 2px solid ${props => props.theme.colors.primary700};
  }

  &:active {
    background-color: ${props => props.theme.colors.primary500};
  }

  ${props =>
    props.isDisabled && BaseDisabledStyles}
`

Button.propTypes = { isDisabled: PropTypes.bool }
Button.defaultProps = { isDisabled: false }

export const PrimaryButton = Button;

PrimaryButton.propTypes = { isDisabled: PropTypes.bool }
PrimaryButton.defaultProps = { isDisabled: false }

export const SecondaryButton = styled.div`
  ${BaseTextStyles}
  background-color: ${props => props.theme.colors.neutral000};
  padding: 0.75rem 2rem;
  color: ${props => props.theme.colors.primary500};
  --icon-stroke: ${props => props.theme.colors.primary500};
  --icon-fill: ${props => props.theme.colors.primary500};
  box-shadow: 0px 1px 8px #EB1662;
  border-radius: 40px;
  transition: background-color, border, box-shadow 300ms;

  &:hover {
    box-shadow: 0px 2px 20px rgba(231, 34, 128, 0.75);
  }

  &:focus {
    border: 2px solid ${props => props.theme.colors.primary500};
    box-sizing: border-box;
  }

  &:active {
    background-color: ${props => props.theme.colors.neutral050};
    box-shadow: none;
  }

  ${props =>
    props.isDisabled && BaseDisabledStyles}
`
SecondaryButton.propTypes = { isDisabled: PropTypes.bool }
SecondaryButton.defaultProps = { isDisabled: false }

export const OutlinedButton = styled.div`
  ${BaseTextStyles}
  border: 1px solid ${props => props.theme.colors.neutral100};
  padding: 0.75rem 2rem;
  box-sizing: border-box;
  color: ${props => props.theme.colors.neutral050};
  --icon-stroke: ${props => props.theme.colors.neutral050};
  --icon-fill: ${props => props.theme.colors.neutral050};
  border-radius: 40px;
  transition: border, background-color 300ms;

  &:hover {
    border: 1px solid ${props => props.theme.colors.primary500};
    color: ${props => props.theme.colors.primary500};
    --icon-stroke: ${props => props.theme.colors.primary500};
    --icon-fill: ${props => props.theme.colors.primary500};
  }

  &:focus {
    border: 1px solid ${props => props.theme.colors.primary500};
    color: ${props => props.theme.colors.neutral000};
    --icon-stroke: ${props => props.theme.colors.neutral000};
    --icon-fill: ${props => props.theme.colors.neutral000};
  }

  &:active {
    background-color: ${props => props.theme.colors.neutral050};
    border: 1px solid ${props => props.theme.colors.neutral000};
  }

  ${props =>
    props.isDisabled && css`
      &,
      &:hover,
      &:focus,
      &:active {
        color: ${props => props.theme.colors.neutral600};
        --icon-stroke: ${props => props.theme.colors.neutral600};
        --icon-fill: ${props => props.theme.colors.neutral600};
        border: 1px solid ${props => props.theme.colors.neutral600};
        box-shadow: none;
      }
      color: ${props => props.theme.colors.neutral600};
      --icon-stroke: ${props => props.theme.colors.neutral600};
      --icon-fill: ${props => props.theme.colors.neutral600};
      box-shadow: none;
    `}
`
OutlinedButton.propTypes = { isDisabled: PropTypes.bool }
OutlinedButton.defaultProps = { isDisabled: false }

export const TextButton = styled.div`
  ${BaseTextStyles}
  color: ${props => props.theme.colors.neutral050};
  --icon-stroke: ${props => props.theme.colors.neutral050};
  --icon-fill: ${props => props.theme.colors.neutral050};
  padding: 0.5px 0.375px;
  border-radius: 4px;
  transition: color, border, background-color 300ms;

  &:hover {
    color: ${props => props.theme.colors.primary500};
    --icon-stroke: ${props => props.theme.colors.primary500};
    --icon-fill: ${props => props.theme.colors.primary500};
  }

  &:focus {
    color: ${props => props.theme.colors.primary050};
    --icon-stroke: ${props => props.theme.colors.primary050};
    --icon-fill: ${props => props.theme.colors.primary050};
    border: 1px solid ${props => props.theme.colors.neutral700};
  }

  &:active {
    color: ${props => props.theme.colors.neutral000};
    --icon-stroke: ${props => props.theme.colors.neutral000};
    --icon-fill: ${props => props.theme.colors.neutral000};
    background-color: ${props => props.theme.colors.neutral800};
  }

  ${props =>
    props.isDisabled && css`
      &,
      &:hover,
      &:focus,
      &:active {
        color: ${props => props.theme.colors.neutral600};
        --icon-stroke: ${props => props.theme.colors.neutral600};
        --icon-fill: ${props => props.theme.colors.neutral600};
      }
      color: ${props => props.theme.colors.neutral600};
      --icon-stroke: ${props => props.theme.colors.neutral600};
      --icon-fill: ${props => props.theme.colors.neutral600};
    `}
`

TextButton.propTypes = { isDisabled: PropTypes.bool }
TextButton.defaultProps = { isDisabled: false }

export default {}
