import React from 'react';

const Vue = () => {
  return <div>
    <h2>Vue</h2>
    <div>
      <v-container fluid className="text-xs-center">
        <v-row>
          <v-col xs12 sm6><span>Light Theme</span>
            <v-card height="300px" className="grey lighten-4 z-depth-0">
              <v-card-text>
                <div>
                  <v-btn light flat>Normal</v-btn>
                </div>
                <div>
                  <v-btn light flat className="btn--light-flat-focused">Focused</v-btn>
                </div>
                <div>
                  <v-btn light flat className="btn--light-flat-pressed">Pressed</v-btn>
                </div>
                <div>
                  <v-btn light flat disabled>Disabled</v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col xs12 sm6><span>Dark Theme</span>
            <v-card height="300px" className="secondary z-depth-0">
              <v-card-text>
                <div>
                  <v-btn flat dark>Normal</v-btn>
                </div>
                <div>
                  <v-btn flat dark className="btn--dark-flat-focused">Focused</v-btn>
                </div>
                <div>
                  <v-btn flat dark className="btn--dark-flat-pressed">Pressed</v-btn>
                </div>
                <div>
                  <v-btn flat dark disabled>Disabled</v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <br/>
  </div>;
};

export default Vue;