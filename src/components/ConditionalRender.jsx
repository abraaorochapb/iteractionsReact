import React from 'react'
import { useState } from 'react'

const ConditionalRender = () => {
  const x = true
  const name = 'Abraao'
  
  return (
    <div>
      {/* Render condicional */}
      {x && <h3>Render condicional</h3>}

      {/* Render ternário */}
      {name === 'Abraao' ? (
        <div>
          <h3>Olá Dev</h3>
        </div>
      ) : (
        <div>
          <h3>Olá {name}!</h3>
        </div>
      )}

    </div>
  )
}

export default ConditionalRender