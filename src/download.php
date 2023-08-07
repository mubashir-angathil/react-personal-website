<?php
                    // Set the file name and path
                    $filename = "resume.pdf";
                    $filepath = "C:/Users/YourName/Projects/YourProject/resume.pdf";
                    
                    // Check if the file exists
                    if (file_exists($filepath)) {
                      // Set the headers for downloading
                      header('Content-Description: File Transfer');
                      header('Content-Type: application/pdf');
                      header('Content-Disposition: attachment; filename="' . $filename . '"');
                      header('Expires: 0');
                      header('Cache-Control: must-revalidate');
                      header('Pragma: public');
                      header('Content-Length: ' . filesize($filepath));
                    
                      // Read the file and send it to the output buffer
                      readfile($filepath);
                      exit;
                    } else {
                      // Display an error message if the file is not found
                      echo "File not found.";
                    }
                    ?>
                    