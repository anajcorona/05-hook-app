import { useState } from "react";
import { useRef } from "react"
import { useLayoutEffect } from "react"

export const Quote = ({title, slug}) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const {width, height} = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [slug]);

  return (
        <>
        <blockquote
          className="blockquote text-end"
          style={{ display: 'flex' }}
        >
          <p ref={pRef} className="mb-1">{title}</p>
          <footer className="blockquote-footer">{slug}</footer>
        </blockquote>
        <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
