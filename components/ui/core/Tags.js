import styled, { css } from 'styled-components'
import { FWB } from './icons'

export const Tag = styled.div`
  ${({ theme: { colors } }) => css`
    color: ${colors.neutral300};
    background-color: ${colors.neutral800};
    padding: 0.75rem 2rem;
    border-radius: 2.5rem;
    font-size: 1.6rem;
    line-height: 2px;
  `}
`

export const OutlineTag = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95px;
    position: relative;
    padding: 0.75rem 2rem;
    color: ${colors.neutral800};
    --icon-stroke: ${colors.neutral800};
    --icon-fill: ${colors.neutral800};
    border: 1px solid ${colors.neutral800};
    border-radius: 2.5rem;
    font-size: 1rem;
    line-height: 24px;

    svg {
      height: 24px;
    }
  `}
`

export const FWBTag = () => (
  <OutlineTag>
    <FWB />
  </OutlineTag>
)
