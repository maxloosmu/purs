module Test.Main where

import Prelude

import Effect (Effect)
import Effect.Class.Console (log)

import Euler (answer)
import Test.Assert (assert)

main = do
  assert (answer == 233168)


