package main

import (
	"go/format"

	"github.com/gopherjs/gopherjs/js"
)

func Format(source string) (string, string) {
	ret, err := format.Source([]byte(source))
	if err != nil {
		return "", err.Error()
	}

	return string(ret), ""
}

func main() {
	if js.Module != nil {
		js.Module.Set("exports", map[string]any{
			"format": Format,
		})
	} else {
		js.Global.Set("format", Format)
	}
}
