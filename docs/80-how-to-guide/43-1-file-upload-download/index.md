---
title: Test File Upload & Download
slug: /how-to-guide/file-upload-download
---

# Test File Upload & Download

## Upload a File

```go title="upload_test.go"
//go:build e2e

package web_test

func TestScenario_UploadDocument(t *testing.T) {
    t.Parallel()

    suite := e2e.Test(t)
    page := suite.Goto("/documents/new")

    pdfBytes, err := os.ReadFile("testdata/report.pdf")
    require.NoError(t, err)

    page = page.Form("upload-form").Submit(
        map[string]any{
            "title": "Quarterly Report",
        },
        e2e.WithFileBytes("document", "report.pdf", pdfBytes),
    )

    page.IsOK()
    page.Contains("uploaded successfully")
}
```

`WithFileBytes` takes the form field name, filename, and file content as `[]byte`.
`multipart/form-data` encoding is applied automatically.

For streaming or large files, use `WithFileReader` instead of `WithFileBytes`:

```go
e2e.WithFileReader("document", "report.pdf", file)
```


## Download a File

```go title="download_test.go"
//go:build e2e

package web_test

func TestScenario_ExportCSV(t *testing.T) {
    t.Parallel()

    suite := e2e.Test(t)

    download := suite.Download("/api/export/csv")
    download.IsOK()
    download.ContentType("text/csv")

    var buf bytes.Buffer
    download.Into(&buf)
}
```


## Download with POST Data

```go title="download_post_test.go"
//go:build e2e

package web_test

func TestScenario_ExportFilteredCSV(t *testing.T) {
    t.Parallel()

    suite := e2e.Test(t)

    download := suite.Download("/api/export/csv",
        e2e.WithFormData(map[string]any{
            "format": "csv",
            "year":   "2024",
        }),
    )
    download.IsOK()
    download.ContentType("text/csv")

    buf := download.Bytes()
}
```