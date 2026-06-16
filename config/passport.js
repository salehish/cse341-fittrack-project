const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;

passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            // Full URL in production (Render) so it matches the GitHub App's
            // registered callback; falls back to the relative path locally.
            callbackURL:
                process.env.GITHUB_CALLBACK_URL || "/auth/github/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            return done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

module.exports = passport;