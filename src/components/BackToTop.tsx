'use client'
import useScrollEvent from '@/hooks/useScrollEvent'
import { Button } from 'react-bootstrap'

const BackToTop = () => {
  const { scrollY } = useScrollEvent()
  return (
    <div>
      <Button
        variant="grad"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`back-top ${scrollY > 500 ? 'opacity-100' : 'opacity-0'}`}>
        <i className="ti-angle-up" />
      </Button>{' '}
    </div>
  )
}

export default BackToTop
