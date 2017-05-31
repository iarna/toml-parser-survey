Benchmark results:
```
     toml
------------------------------------------------
  17.20 ops/s @ ~58.130ms/op
  Sampled 45 in 6.06s.
================================================
     toml-j0.4
------------------------------------------------
  241 ops/s @ ~4.146ms/op
  Sampled 78 in 6.05s.
================================================
     tomljs
------------------------------------------------
  126 ops/s @ ~7.930ms/op
  Sampled 77 in 5.96s.
================================================
     toml-parser
------------------------------------------------
  138 ops/s @ ~7.260ms/op
  Sampled 75 in 6.01s.
================================================
```

Test results:

```
TAP version 13
# Subtest: test.js
    # Subtest: toml
        1..5
        ok 1 - example-v0.3.0.toml
        ok 2 - example-v0.4.0.toml
        ok 3 - example.toml
        ok 4 - hard_example.toml
        ok 5 - hard_example_unicode.toml
    ok 1 - toml # time=74.584ms
    
    # Subtest: toml-j0.4
        1..5
        ok 1 - example-v0.3.0.toml
        ok 2 - example-v0.4.0.toml
        ok 3 - example.toml
        ok 4 - hard_example.toml
        ok 5 - hard_example_unicode.toml
    ok 2 - toml-j0.4 # time=31.894ms
    
    # Subtest: tomljs
        1..5
        not ok 1 - example-v0.3.0.toml
        not ok 2 - example-v0.4.0.toml
        not ok 3 - example.toml
        not ok 4 - hard_example.toml
        not ok 5 - hard_example_unicode.toml
    not ok 3 - tomljs # time=219.033ms
    
    # Subtest: toml-parser
        1..5
        not ok 1 - example-v0.3.0.toml
        not ok 2 - example-v0.4.0.toml
        not ok 3 - example.toml
        not ok 4 - hard_example.toml
        not ok 5 - hard_example_unicode.toml
    not ok 4 - toml-parser # time=50.753ms
```
