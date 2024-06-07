function JobOpening() {
    return (
      <div
        className="JobOpen"
        style={{
          width: 352,
          height: 175,
          paddingBottom: 23,
          background: "white",
          border: "1px #1B4893 solid",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div
          className="Title"
          style={{
            width: 352,
            paddingTop: 24,
            paddingBottom: 16,
            paddingLeft: 24,
            paddingRight: 24,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            className="JobOpen"
            style={{
              textAlign: "center",
              color: "#25324B",
              fontSize: 20,
              fontWeight: "700",
              wordWrap: "break-word",
              paddingLeft: 24,
            }}
          >
            Job Open
          </div>
        </div>
        <div
          className="TotalApplicants"
          style={{ width: 352, height: 88, position: "relative" }}
        >
          <div
            style={{
              left: 24,
              top: 8,
              position: "absolute",
              color: "#25324B",
              fontSize: 72,
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            12
          </div>
          <div
            className="JobsOpened"
            style={{
              left: 107,
              top: 42,
              position: "absolute",
              color: "#7C8493",
              fontSize: 20,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Jobs Opened
          </div>
        </div>
      </div>
    );
  }
  
  function ApplicantSummary() {
    return (
      <>
        <div
          className="ApplicantSummary"
          style={{
            width: 352,
            height: 309,
            paddingBottom: 23,
            background: "white",
            border: "1px #1B4893 solid",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Title"
            style={{
              width: 352,
              paddingTop: 24,
              paddingBottom: 16,
              paddingLeft: 24,
              paddingRight: 24,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 10,
              display: "inline-flex",
            }}
          >
            <div
              className="ApplicantsSummary"
              style={{
                textAlign: "center",
                color: "#1B4893",
                fontSize: 20,
                fontWeight: "700",
                wordWrap: "break-word",
                paddingLeft: 24,
              }}
            >
              Applicants Summary
            </div>
          </div>
          <div
            className="TotalApplicants"
            style={{
              alignSelf: "stretch",
              paddingTop: 8,
              paddingBottom: 8,
              paddingLeft: 24,
              justifyContent: "flex-start",
              alignItems: "flex-end",
              gap: 8,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "#1B4893",
                fontSize: 72,
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              67
            </div>
            <div
              className="Applicants"
              style={{
                width: 105,
                height: 50,
                color: "#7C8493",
                fontSize: 20,
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Applicants
            </div>
          </div>
          <div
            className="Chart"
            style={{
              alignSelf: "stretch",
              paddingLeft: 24,
              paddingRight: 24,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Rectangle198"
              style={{ width: 150, height: 16, background: "#D2051E" }}
            />
            <div
              className="Rectangle199"
              style={{ width: 77, height: 16, background: "#F57E7E" }}
            />
            <div
              className="Rectangle200"
              style={{ width: 40, height: 16, background: "#F77307" }}
            />
            <div
              className="Rectangle196"
              style={{ width: 28, height: 16, background: "#FFB836" }}
            />
            <div
              className="Rectangle201"
              style={{ flex: "1 1 0", height: 16, background: "#F57E7E" }}
            />
          </div>
          <div
            className="Frame5168"
            style={{
              alignSelf: "stretch",
              paddingLeft: 24,
              paddingRight: 24,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 32,
              display: "inline-flex",
            }}
          >
            <div
              className="Row2"
              style={{
                paddingTop: 24,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 8,
                display: "inline-flex",
              }}
            >
              <div
                className="Hired"
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 8,
                  display: "inline-flex",
                }}
              >
                <div
                  className="Rectangle167"
                  style={{
                    width: 20,
                    height: 20,
                    background: "#D2051E",
                    borderRadius: 4,
                  }}
                />
                <div className="FullTime45">
                  <span
                    style={{
                      color: "#7C8493",
                      fontSize: 16,
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    Full Time :{" "}
                  </span>
                  <span
                    style={{
                      color: "#25324B",
                      fontSize: 16,
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    45
                  </span>
                </div>
              </div>
              <div
                className="Declined"
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 8,
                  display: "inline-flex",
                }}
              >
                <div
                  className="Rectangle167"
                  style={{
                    width: 20,
                    height: 20,
                    background: "#F57E7E",
                    borderRadius: 4,
                  }}
                />
                <div className="PartTime24">
                  <span
                    style={{
                      color: "#7C8493",
                      fontSize: 16,
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    Part-Time :{" "}
                  </span>
                  <span
                    style={{
                      color: "#25324B",
                      fontSize: 16,
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    24
                  </span>
                </div>
              </div>
              <div
                className="Declined"
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 8,
                  display: "inline-flex",
                }}
              >
                <div
                  className="Rectangle167"
                  style={{
                    width: 20,
                    height: 20,
                    background: "#F77307",
                    borderRadius: 4,
                  }}
                />
                <div className="Remote22">
                  <span
                    style={{
                      color: "#7C8493",
                      fontSize: 16,
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    Remote :{" "}
                  </span>
                  <span
                    style={{
                      color: "#25324B",
                      fontSize: 16,
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    22
                  </span>
                </div>
              </div>
            </div>
            <div
              className="Row3"
              style={{
                paddingTop: 24,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 8,
                display: "inline-flex",
              }}
            >
              <div
                className="Hired"
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 8,
                  display: "inline-flex",
                }}
              >
                <div
                  className="Rectangle167"
                  style={{
                    width: 20,
                    height: 20,
                    background: "#FFB836",
                    borderRadius: 4,
                  }}
                />
                <div className="Internship32">
                  <span
                    style={{
                      color: "#7C8493",
                      fontSize: 16,
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    Internship :{" "}
                  </span>
                  <span
                    style={{
                      color: "#25324B",
                      fontSize: 16,
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    32
                  </span>
                </div>
              </div>
              <div
                className="Declined"
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 8,
                  display: "inline-flex",
                }}
              >
                <div
                  className="Rectangle167"
                  style={{
                    width: 20,
                    height: 20,
                    background: "#F57E7E",
                    borderRadius: 4,
                  }}
                />
                <div className="Contract30">
                  <span
                    style={{
                      color: "#7C8493",
                      fontSize: 16,
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    Contract :{" "}
                  </span>
                  <span
                    style={{
                      color: "#25324B",
                      fontSize: 16,
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    30
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export { JobOpening, ApplicantSummary };